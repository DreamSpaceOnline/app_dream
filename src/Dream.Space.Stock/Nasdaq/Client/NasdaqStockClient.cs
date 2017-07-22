using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Dream.Space.Stock.Enums;
using Dream.Space.Stock.Requests;

namespace Dream.Space.Stock.Nasdaq.Client
{
    public class NasdaqStockClient : IMarketStockClient
    {
        private readonly HttpClient _client;

        public NasdaqStockClient(NasdaqStockClientConfig config)
        {
            if (!string.IsNullOrWhiteSpace(config.Proxy))
            {
                var handler = new HttpClientHandler
                {
                    Proxy = new WebProxy(config.Proxy, false, new string[] {}),
                    UseProxy = !string.IsNullOrWhiteSpace(config.Proxy)
                };

                _client = new HttpClient(handler);
            }
            else
            {
                _client = new HttpClient();
            }
            _client.BaseAddress = new Uri(config.BaseUrl);
        }


        public async Task<string> GetStockHistory(GetStockHistoryRequest request)
        {
            var message = BuildRequestMessage(request);
            var response = await _client.SendAsync(message);

            var content = await response.Content.ReadAsStringAsync();
            return content;
        }

        #region BuildRequestMessage 

        private HttpRequestMessage BuildRequestMessage(GetStockHistoryRequest request)
        {
            var resourceUrl = $"symbol/{request.Ticker.ToLower()}/historical";

            HttpRequestMessage requestMessage = new HttpRequestMessage(HttpMethod.Post, resourceUrl);
            requestMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("text/html"));
            requestMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/xhtml+xml"));
            requestMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("*/*"));
            requestMessage.Headers.Referrer = new Uri(Path.Combine(_client.BaseAddress.AbsoluteUri, resourceUrl));
            requestMessage.Headers.AcceptLanguage.Add(new StringWithQualityHeaderValue("en-GB", 0.8));
            requestMessage.Headers.AcceptLanguage.Add(new StringWithQualityHeaderValue("ru", 0.8));
            requestMessage.Headers.AcceptLanguage.Add(new StringWithQualityHeaderValue("en-US", 0.5));
            requestMessage.Headers.AcceptLanguage.Add(new StringWithQualityHeaderValue("en", 0.3));
            string content = BuildMessageContent(request);

            requestMessage.Content = new StringContent(content);
            requestMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/x-www-form-urlencoded");

            return requestMessage;
        }

        private string BuildMessageContent(GetStockHistoryRequest request)
        {
            var timeFrame = "y";
            switch (request.TimeFrame)
            {
                case QuoteTimeFrame.Month:
                    timeFrame = "m";
                    break;
                case QuoteTimeFrame.Day:
                    timeFrame = "d";
                    break;
                case QuoteTimeFrame.Year:
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }

            return
                //$@"__VIEWSTATE=XZrs0K3CLAQik%2B9%2FBOhqgzAu7AhSyzuIPlnviIYDraD9QdIJSo66MxkIWaIalgteK%2FjHBtc7rDr30HU44miTqa1z8cjPBNrr3CqxTGaT0xhET3TsmEh6o8AE2YMCXPwKzly0FhTZeZmrLT%2B%2BJ%2BBv%2F3dBBodNYSRs4HGe37Xny3GBMQ5qJ8lwJhyxMiybjfrblSClVGt8DjPJEJfLcPSJoCE2uSjSv24XMTS32CRhmmSen%2F00EQDWPNwa2xP1Drjt%2BznOhnR1x%2FPZUcCZq6rH8C5kOmczDyErER38S7BJLOoPDa78bIEFeE3nPXln8EPyKq9354xTTw4u2u3kklYdXYkz7V9QWLjSIRv4r15Hq5MpB02i9xE%2FFLZUk6Rx94W4E0p7J1WpHAh%2B9gMdafOhhNdmojnG94sy7YWTz1nbm5oTjwsj0cf5yA8Ol27huS%2BvYNwDCBbEezuNvwLed%2Fcd4%2FLt0l9B9zrl7INugqcoVQQ%2F0rI3rkhTJRVTt0ZOHOEjij%2BPGb%2BFoNMQVR0DmYK%2B4qysHQnybf747pr2Lolt530MiHEwi%2ByMmOHms4Im%2FsP3ZtujLasSJdpxpvYjoJXa8j2biqh3Zg1KYN78J%2BOCMIWkXJ4XmztgR0YlwvwpJIkKb%2FhP5%2B1mTHcTHUehKjXG7e2c8fsnfKxIYABJx97xxNuLKY%2Bxjc37%2BEewFAldM1VTseAQoenfv8Y5pcc85ZsjXaDsngiVpq35h079lJPvBvdgLaR%2BmKHzoKAtVG%2BzYsmz5K5nTugO5QbTz9RD1HyGdqQBi4aRb0DVEZaoWmxxjqw9nv12jeg5v2SUCW6cualEnFzX0614HxTcX2gjTBcI8qpZ1G8LioadqoZKoGL023OpFjM6KM8Yz6PPlDrcjSjpYDpLTdlyCgetZMrHf5qiPBIpLj7Fv8ScQ9YA0PqxQwywBODoaQBRMG5%2Foo1hC4NtUFjiYr3orVxvEyvLBjozsX7woCHUwAevXlsbjlbxw%2F2GHDcxEfORCatJMK%2BZTr8TfxpMxXoKoQGyO%2BuSJW8pgNlwVMR9OqGhsqgVg2lgS9bxc0bE0XPAEekfLqmwbjgjG7jFZAG4YtDbdXzyKurcOsL%2F8teozA%2BR1e04T6vwoSLEMszZty7km5TMlODaE4zr6f9BTZMXXVno68TdTHJewDQhUuOSo5AXZGdjvCKfcI%2BvyuCnJMD2rx9%2FAPPkpi%2FsUb2GJ67UX7dW1NG2dWOaBYkkmU3sEDmvuF6Md39CKpIqSzDnxwpMbdjN%2BOflCqQJfa9VwkG2FQ4s0dBOIiVaUNuKWQx5DcS9oQWkNcitM6VMQsiJ4G%2Byls1IZxa0gJLk5KmNOMIdVp%2BTu55ZRSdCPtd%2BGhs0jjp6lNGfUYS58poODvI3ZESha64mqB4hk7o88Sz%2BBGkomCtrcPNVJYmT4iI2MRfa551LP%2FN%2B73w6cdJvHCqF7XHc3dR%2FBCpIf2p2wnpEID5IzCyN3BuOG9fLQjLMlkGxKFY9GR4bC9aivEQC%2B2kzFMKqvFTb6uFFUXduh2dAc9BJ6tEixnvuKLmW7QLF48TMhbeajFyWyyE2am0E%2FJYhwb2bPFcEws%2FSGxv0GGYA5pUSi6keBP1%2BMy3739eA9gZ%2FE8Lsaev%2F9VMGW5Tmv18TJo%2B%2FX7B0tK1unxLK7lW5pUeLKI%2FijxCv9obEDLYRUOjWFynwRPeteP%2FjhHNRnq0RM2XYPJQpagLpsUye2X2JGI3Eh7OIkh5awwwd8kfOBFPIKC3yfD4DlVEaKDqi1YwUFpxo%2FehSD5J1G8g6k31yznP9YKTeFTWWSrRr0dTXHosfEG5RgyRITyicd39WkQkpS3mXKlYxjg6Sgmi%2B2FzQoKtjxsXUaDCqITaZAd4j33u9kM8Ft8DeQoFuJyXBbU7GKuhthpzBoZdaY7O479eNyDKAgUm7zaubl2ERXk6%2FLZgl1cZFngpZULPL1EzQf6mrD06eTzf2t%2Fc2vErwTVdIu%2FS9VlVYiymstsdDvwvuVYqmGZ3k0o4C2lB9ZdroZig14DKcVUXOEy1DYe8pHL7GrFvhSvdOwGnu8%2Br1ZeThmxGdWB63j5n%2BqFRXIzlLVwYRYOePGFzKvvEj8kVMOS03qqGUDvz9Iv4Mk4Xxb8fVSMZcPrMgqdfnTRalf0WEKlfqSDJe5yBo%2Fx1J1FqVOVihY8ndM7m7noIUydNoFq7BEG4YPOdt1%2FkXOu2sK07etwwkFgvigx5FWHENkJcNhhL8b2MK6%2ByQ3fD750qqXDcFCKz2juRQxnWDMA%2FP91HsuTBqH1vA0uScH6a%2BsMWyaF1CTqXV00NLUc%2BJOutt2vNpS%2FQGxMVaURcwPBOg48choLoJeOi%2FaDXj2ayLO%2Bqt6prVasLioFHwIbKGJ2U46raAQiie5WjHSs3jSfGj%2BZ8Uu3qHLx%2BYd%2BjTbGD0a%2F5AYXBlGxBPoEtnE6xmZ8lriImdYaQ1CrzSjLokZhpRcMSofqtTn3p5yPfu4Hd06%2FJ1YxeF3USJ1rxDTExQDUvIU3PBxi64UmrHNg7dmLtFNy0woQpqyu0gRNbwla%2BTc%2F3XhUi93VWm3O2FXVh9crkb75cKBP%2FdS5YK4ms2t2trcov10FT5Wzp13LwURdLFzio6Qb6rAPSgERfi9uFRTD%2Fg%2Fb4sxyJgnPHxE94SrixVXazQlbbxaxHMS%2BIyzcoJ2q6sKgC2RojUKS2NhyGmNasz959gnOsLp5xr2oOmrO3F7p6LxaLSTB%2BWZXza3EzAy8aBner%2B9CWIBARhdZ1QYgP5x2Q9CHLM%2ByZ8zJ9zddhZHV9jzvtHsNTfSpIkZXGFXSDujzZ0maxssugYD%2BmyjnA8Lh6OwxARupBlLWwj6%2FTDcqnhgbEQEkcN%2BM189sbsWVKU4uemyahnW7NA%2Fz6PbEHDLH8yNduvLKRaMDZtmvnp8AQJDuYhdV6mcyfna45r1jBsYf34afWBiJ9lrPux0b%2F2XIrLU51RTmdkWnuD7CHgjKmABcHRLKIybligk4NkA%2FV5SV6DdBbXLTuYNz8kMSQ1jbGCKe2RTDg1DvyDIgwQsq8si7bHlaIDo7UE%2BObsUTlux20xtP6hyHbZ6MhZg4HWzSQTDWNUXffCtA%2BVuKsxcznh6poRjdnb1XZhgeByk3%2FgjQ3dult7dtiM19ieJnx8s107F6gK5AK1Q4tUmvI%2FH8jcVfPQGJlLE234R7qXAslUZumhSZlHtqi%2Fa0435AhBu9YITr2nCdYJ0z1pda4cJmXXkjP%2BwVySZKzWSXCwGuq1g%2F9ZJYGZl3qtIkvVm05NNAMMwdjFVoSaddY5t4U%2Ftlq%2FXD13HJt%2BrMpZmvSaKwPn%2FTIqO9aAPp8Q1Rxdt4hEzejW5NLns7z7i4An3mVAo%2Bbao5Tsl3gxEpWv4lWeC4jkR5p16IlFgFzqUfGN4U%2BgRraXsrXGJTw9Z%2BawIJsZpxtm1rn15XNa%2FIl00Ecstpbu8EXFmnDJzh2op7%2FLWEFYHTNrbbwKR4GoIgiBM2DAJeP1J6aBv6%2Bn%2Fsn4zcjk8aZrG7hEwgrF8VWm7VGDyxv1Z9zu7MlnZEYmgsz66nzGPCtY4nZLISv4%2FsAOsyiWF%2FXW8c17YNq0BEkNg8lkA6QjAJySfVnlH23u4MhheojbOzIe3U8W6IJOy8HHEHz%2FYMlOg3cpGWkRitID%2BsjAGymVNzb64HyRircmVttygl8rBPdMVlhGlWzTduZOeusqT9NY2K4nWgtkYqb48jlLtYGiidyDfBlUGlgDqJsLa9GA3JMMGL72IFLP%2Bl%2B4NltaSzh%2B1Qs2qtGSTOH%2FP%2BX1bBmKqqoP9XOpj1b8NsrQcXz9DtJuGkAQXYQhz1blb%2BDCbllMbG2tgTghLjGmE84sdoH1qgG3WkJec4%2BPCFtNuEaTPI4rLyiuww9njlzR17JpjQJdXroFjNarepDwey7nK2ri4dKVHOWrGlNKOpTtUuFNucUK7ahIocMAdqzvYc95v9%2FdJT8Tl95LeOXxYtrNSklZhW0YyfAljhG8qW98eRNx0%2BUqQEDHA0BaiY1vBhozcxNiGhqR7VdIYvHzScdHd8KKBIkZD0DbWXE3EI4LRYS3kyBWrxHpGTXuGrNj%2BZN0r55lzR5g0e%2Fmjzi3nmBVIrtA2xC5EUy6Os%2F4V5QZ9LqJ%2Fj3DrhcYQwhWYVopsXtu3UC5OgkG7IqO4uy8cx196lLclwoO7E5edqXklpY%2Bd5Y%2FVCOhSh6fqi1lhYR1J84uCsfaX4CcoRLYn1t5%2B%2F6SA92HJ9CXB1IWRTHDtXPA%2FujS408TMPCjds77NvG4ZXeEtWsMMSUA%2FsS5oITI3obfziCzDR1t2sdr2Hsgc1G7A2ZIX7rtfJ1YOvvDXOYxVRr%2BPAOjoysTWVEXCHrBjaEhF14JGVT9nftTqosKaaCSrV%2FTEn6qe2%2FfxJyxOmC%2F8bTz9NwQR06pNK%2FEUByL%2BdFCeGhfMei6qfDOUveYYHCr3OcUw9q%2B%2B%2FfHI8QXIKJUZhnKadpD%2FZ34TkY60Gyyn9iXlINUcfZY6gakKS8EeZEuKhs%2FxIgbnWVZcTYYfWU2Q9N80mN1EId23Nq%2FFeuQRE8xKjAn317u1VzRNchzVNe%2FixURahXo1wLPRGBQIx79IKjAVVPxItej2ljGJWQUZa4ReguxGdOQS5U1hWAtYf%2BLbBXfZwGF1JENMW%2FWanpMFJQ8hnBeHD83%2B9FDepngtgfx06Rm%2BCJ08X0ydpKf4FwU0TJV62rjlKyfe2xzs1aWbLc5gGFmaNPaG4QY1D%2FkdHUdFxGQ%2BZiYxAxat4ylCY1CqzWbbfQjUdh%2F2VsoWDtc9KbmW32QrV1SI7qjEb5XWOx3wsbXt%2Bf%2BkOZvQm%2FAhgRWuAnQe6Zc8YI9U5gKIs0vUYYHlULVqZVlpGb1klcfzpVlX7sdBccYr4lTDmlS9gWivItrYFOO49bMEAXxpAvY4B6GIT2o90Jfij%2BucpVlJ%2BXcTG7NZ3aya1L4Uk24WwXeGbyWAKKVP15jwqGtLyk3dqpFs%2B06DsLpvu8XI5Ilu%2FyDLrxcE0vcfMYyyWF6IzPxSLXMZFy8UJuFDrCKOLf0E8jp1VxH7T4OSq0cGm7Lh5DrgXpIFpLjMFSfqQKxUM32A9bzw2zqbu7a%2BbJgCUV0czLmDmZy6WLzmbiT6a9VQWoZh641K964ELQALR1i1CqlmNFmwiTLAMucOWeP6S9vk6dQG0D20w7OnCs59nBJ%2BQdaojzCX7qR7nnVKUNbxk7yzgEL6MDugq3uy%2FDASNR3G02qac0dt%2BfdCAxHD6uO1DKCNe3QfqAUxg55ErketR0dblyxQGARTFfxNix5zeuXDKopFx%2FRbJZIMqRKU030yzYBHGKothZFd6eVRaU3X%2BmQfQj28AhhXrJs44PKYQ4AwMvE3lJplf1Xb1FMEcK7S2oDjR%2FC7Jzlm5THi4srgHsirNGUa1xxEgGOHyGl7bIXLqN%2FYw2kkPMmxpizv9jXcflxHqGddaNj9yCO0V0oxnh1J%2B1g8eniMkJZEdNDUOZP4YXJcXjBjU97VvlBK%2BT2E2%2BIGo%2B%2BQYnHpKIyJxW3LMJDxc%2FP4DDtu87%2B0BKkKZRJKV%2FICdIt&__VIEWSTATEGENERATOR=87BE3BDB&__VIEWSTATEENCRYPTED=&__EVENTVALIDATION=VEkuZo2SeOu%2FnD6j9HLbGqFRgn64%2FASvJe4A%2F2bBQZJEYAvhmTKtRI8ZzltP4OFS9mbehJ4lK5HMuQEndw4xLqGpg1FlBvG7W9hqdK6FM4c2DB7QgSr0nj1a58AwdlnR&ctl00%24quotes_content_left%24submitString={
                //    request.TimeFrameValue}{timeFrame}%7Ctrue%7C{request.Ticker.ToUpper().Trim()}";
                $@"__VIEWSTATE=E5DobozXYrdj58HU93ksquh4MD%2Bd%2FZBuR0I8BfnpDeCpW3RPQ8etJGiHe6hdsh9CAjPdKanibM3Fk5Xh9oL8Kin7%2FFlVwcnufsZ32g4kEwZiBogFkZw6OqxfIFnjW4po%2Fkts46kKSiJLttQGnL%2BZyI2CvD9jxfpJJJcLTu833Ji5ESSy69M3aEcrGIrSj8AbLqs09q9J1Fy0X036a8F5bdpi89DvqJcsdPXW3pmghH%2BulwAPHxEyxNBNntlRZLsSar0Oq1I%2BKn5VtwTrm7gtBBj0R0Ar5rBdeVtSEUg630qUXXRsx94cCTxl%2Bgzw27Cir%2B2jUD2Pu%2BboZaL6uDzSuPUpzV%2FIuDDCAXoQlLTOcrIr7VLnyrU6F2pavnfP4DzzKpfOHPtovT6XK5pPMLCHnhgUVdQLFwiFdoWXiJLEM5rXUdgdETJo%2B2jXYItksZwLe3km4RzEN4Is8YNgRNaAQWb1w8Xge22yPCV0Uy03xxW4HZJdEBNj6Jo%2BiL6B0tNe7%2FKCf525jmQ%2FbSBE5Rdr8ANsUdn2aHAOIFX7604kkbz5LwRkNLvXWNTgdlic5IUZdrfW05Z5TdhCOhhyIjDk6nUb%2BhYUTZxOh60tvDgwBhfuy8pWq74qDPqcCA6FFAtGp4RGTWiZa2%2FoZJiJ58yPxQkLnd4aGo8uuvYsVoQOXTbw9823xTzMP3Kx8LpFs244O75T0nQTBEUX7Qm1M4mq9PqjGbAlFrcQ65MMVHAzRItsxQB5ha6SAB7vypXZQURmNpe4LDS7RaAchpntsNw05taT03SMZm8vDHBzzbKEdf%2FrBZMvEbr9nk2dMkTAMSJd0miF8PFNPgO1l2%2FjpYQD2NRDcbKCL7fmX8ToAfMgpDTpgRsBArt9z9sZ9OnD9b%2FY4pOvT5gX9rRXTQLPKvbER4%2BT31utUEumra%2BpLl%2F%2FR4yzYkhFs4Uvzs0Jruz0ogCVfkC1Hj7t05pkszxikygxTMh4cD9r48w4R1DQzPCp45KaqyDxysNbTNHhMvRkULHCv0HYR0kWlBtVvFqHiBh5npdFjs%2FNp6EuyaeBOMZKhIdLyBg8lF2NE36PP2daFNZFPw2B538WHwDdWEnInOZZodzeND1FfMCZhPFHOQGzHYyxwMR%2F5lidcRVZ%2BLr%2Br2KGs9QhrPuO8txKMNH5HcO7cnCj%2FlC6hlXonjkE7ypkpsbECYe3GVb7JNGxVxfLobQwl2sWVuDecThM4gh16cNERpWwlKABCjT2CX%2FzGyh89VkhmlckQBNIZcZ7rLB80guSs9EMxctqpbwRftfehCo77gvElJec39i%2FHohWrzwy8fEAKQWNuJJBmCYd4or%2FsmEOLkr%2BtTKBrcqiYh%2F5FyFw3nEUbvWY1yhi%2BEevpNSeS6rHTxGhG1oR1wIZLSw1KbtF9SvhJB%2B53UIVolS97cVU4Y6nlyZeiKTiMwXqVSnb3iZH9XJo7SmA75cb1Ov%2BtNTw5dw%2FimSZTBygzHwecd5kKQuC9xIRPneHIj3tjjkgVihIGYVuh9Pa%2FdXMgYume6s72Cr0LA%2B2Z5KdvqPZsWjJ1QJCsstbaBCCNAjy5BpbYzfrNk1QPXhMDfFVS%2BC4aQulm%2F8%2FsCoZqdAom1cQFhciCMpcw1rxBvfbz5GngHHsuixRvz1G9aD0YNmla3BzSbj0mlj8AJhyllgvSY1SJgi8NVM%2F64DrNjwN12OyWbMTm363xLQr2qJ5nUpGJKbjT6cda9FV6Ma36nH646USIDtvaD06fQJyXp0ktC%2BRmhf50%2B6QrHZ5Mkr4p%2F7kmRe4urQm%2FDgTJWx51p34UMeJ8KpqHcqbfckcloWQkgGA4fUFYMNFe00%2Fmrgulsi2puy3CcrONTRJFcuFnneJETtNp7F2qnKr8aMbyhoAGtAsc5ECDe1dgBq8q1SWHQTj2Q8vRbmR7ETzkJDz80weeogurF4drGCWvd3gOcJM5FLt4VDH43Dbz0hhSAoMQHjpmeA3%2FIRhSHa7aN4I5x3VnUxKR65ljoDSjBvbpAIkTXYuEV5%2FaOtq04ZfVarBx0LMCz8nzak%2B%2FNV69ov5PdzIFIDgPxVNPLx1dk2o9oktF3AViEEkhRYN0Me9a5i7jM3AOiFc2halbdCCXKcld3q2txDjacX3rjvSZhMsgiptDPvtRvuz2h6DA8fu7UDscv%2B01CJG2rBmTdJP%2B%2F8M6hTIllcTK1ZDgOsRQrb1b3SexEJkf%2B1brnpPxVHnoyWWoNkXOhxl%2FOZikjQj7ilmwgPHy1ccBI1VF0CNCVMz5QcURg0yJACrKCt2EF6zBHAr2WS8NzjPBTXndPJtJh2gkuNR9Ql6y30ldmTStp1tHM2Ddbzsi0%2BvdZJvMaT7dG52fa7NdDUYNB6zeZAj2OSnk3lLCWDNDb8Lu5tOCdSsQVy7cbqW44LZz80ePNBmB9w%2Bz%2BNNRDlVzLiYAVJycdNkcRYPI1yjYC8kd1%2F8yx6fG%2BBntxIaDRv5LN8hQ%2BHVEi7QqxzQKNha2H3%2BxyaHYSvWN2anMCHmqUwovzLoDCaF11lhc1B2EdjzEgS7EjbctUxvOOPUZprigecysYwVPt9VGbGzbRmTfZO9QF%2BXo7UskLuMylvC3A055tFB7BXvx7UYRMwRM0XhDvCmU9VBdPmAWqcP22d%2FJkVWGSEFwqtA9NaZFfB64QsVXEMH%2F91N88vD3M6S7lGtPwG2ZVKJiY2SfQCev%2B7c%2Bpdl6JSCyNX1VfcWwFnV1NnkJvJ1ow8w9aaNwLBw92IcDw%2BtmUKmgf4vBj%2BVYBRuoRyVbQyblxIHaSt52FS%2FR18y7BAJat4xxv7SGYElGo1zJQHFBk1YilkZlrXox7EK3xSekw4xWPiHaTQocb2RzzqZW4ZDFgCmRPxp%2BYwxYC8umYl5OZw%2FWbO73bSvlScUnaDS3EoeVGE6DY4Wb4nYCSIGNpyqjyJYauhr7%2B69DY0R5kKU%2BKt%2BHIamJ8WZU31fUt43LhaGwLqdUOpn3BVargrLumKHVBf66%2FL1SoaevyVNCH4ZmwY5XxuCZVo8%2FWPJuzH9EO%2F1kAxc5QvDRgTtHocRefqetaxCSpy86GCvkWwhxVHALpG4HcZ8ctxkkvPaOWm4o9LeUmorrGSOgnBqR8%2Bna1JKStKewPA7VaXigH7Jz%2Fmms0zbLyRRUIKK7yMQZzZL%2BZDfvfJCwSJhdvQl9yyOjc7Gy2SWHVzWyFClzNHQrZtk1rb9ENuA6jMmugBV4isRJH2IY%2B4DNHUdZcoRo9aOleieMHB7XiNslRth2wABlzvY2PKNMRNcMBzbvdXXhrEHVLP4NQXMQbmPbUI88fd8GxAoaYCP6%2BKKsTbaX1NSnydcIvSzFKwLgtG53AjHNLmQrA7tOyKbZVjhdjDTf2hBOc6yXb7FEVpUN3VXbTaQQCusXS1JfmISrSksidLP9C%2BFKLi8XQWYHGmw%2FgSPguVPLx7MMYJK4lDz9BId0q7Brm4aCR2CG4gRE9rna%2BcCCsJ%2BPkXnyvym11V3H8cIc%2FZ7AgERg3RtwIfarGFp8ko9tILvlgbHkFWEkH0e93aWDG5o9XR7Whkf%2FmzJlvrsQDi2rD8VYuj04O1QweC%2FuEoRHQiAigwH0SUOqYoSEyL3hWFTYGEoMcC%2Fib7FXTe7yDZl5lcPeuJpFrkvaVecxKD0A%2BpoljxZGpDGv1GYl6Uk7zwHj3GzXuZ%2B%2FpeBZppJszDMxubv8XQ3foC%2FPBEj9VD6FLj0Jxn0gE8TRyux9zI4VhuLPmqKY3cBEiNg3KxXlDPIydRG%2Bq2aXH2maiaI4XvGFjd0GVOuwX2uaYZLobLGEhKR51Pp%2FWydE3C9HIw5t2zbJto9ILxV2EWnUqcLWZ5TIILT6XkYpeVWlCGeXUcyOs%2Fiis5sJpvOQS3rhKSF645skV9ThBePbshMzUKQN2j7vm5C2DLHaaEXD3Uc0iIMDVDu0nEmx4uRtC81T1vMp1PdX4gLWJe63E9XfORxkgpNX1h%2BnQ8D49wxHs2zXVW8Dygnm2zVp2Vcdsa8VqgFwICsTTIu9GhdNC0%2Bx75f79HbehAl%2FGX4qOCGq7Xdp01lOGXJUGkTPdRmt6lmF8MNkvAQGHfGnCIDHOAOoJZETmGQ5q0ks7fpK9Qs556zqDhlRYJGDFAM7459fmmDtBwby%2FuueBvXK2J1CROS3NouupPlfvmbCHd258UGqO5rIjVnr1p1QnTB21%2FhHk9cEphEAwwnrVCJgzEZ5Wx01iz%2BTk2qu%2FLUWyqvegy%2FHcy9YiTXcffL5s6vc4vjlBTgwfrlzXe6emEuCnsNMo9bU%2BxwbXIBo8%2FjwwYkz55WCIhpH5R9O4YAshU%2BKCJHZSXs5fYpstxoio5mtb104cA9aLwTHsgcY%2B62qYzlpcZqNCyeNAw5lrD8dxq84ECsuTY4nBv0z0kHhNVVtCUIwgiF4FFmugF%2FG3d3%2FmeLu4zzQsth4UHoCuYnqqtHc86hvbE5OU9kpHeeXP7JZl%2BVsxgQJ4uFsciDwaFTzCQ%2F6xRq4VPkxAEJD1rXseWfM%2B6EcpGLeYuvGeTIjJcfIgkR4EDaORHLYuI1KR4gRtxqroe9Um7tYbYqh40Es5niao5rS%2BSwG7TNJw9lFdn%2FLjpCnWxSFC8geOb5XWWUECXAAcCArSDBiofjYIfvN0QVPsCBm8waAdzEGsNS9IRWwchagGGfb8Ws0AIamK76G6ntW4jns1GJOv44h%2F85eFBtAbnbJhhaIxoxp9hiFFFfx%2Fs5uscR45hfWIx%2Bkz%2BZ6i7%2Bzym9Y5uVF1WX9nfKlSrqIBZsNPwliczyz10s3TTTPog8ao6fjAH5ZPXjdstzgfGA6JTq8wMCcQWIQb8FMu8MURvybG6rAuaAR1yRmq8kAJSkm%2BRdnKeTZJBOy6pUOVGd8NGWxkk2yJs%2BrcGz84rxlOJzMnf3Om1tNNpsw%2BvZr1ZoX%2F5b22xGLiVI9t6V8qagoqEY%2Ft3GPzW2fqPL8vLhTB6fmCVW1%2BS3AMAlhvZPslQb36pDpRgBRCY5uaQc2hA3BqxLUaGPETpAc3behOzo6rVjOg7zzZI16WPqUV3R%2F1%2F%2FsjW%2FbOFl9ch5ypmWYXgQQEFMvifzhKG6vbCxCvDOHjzNA30%2BWRXJbUp2swHo12lGnCgQhhnOujJYnJ1wkTxlyT3zwKCcYrB8zpgkIyesQrMLtM3lweoAlZRimpRDSD%2F%2BLNA17FI%2BcCFbJ3U2etkRLtouRsNOO4whYuVkbZ4YdP5GRSqJO6YyoEEsqmy49%2BINTAJy8cq%2FUzMJC7PrzhN5d3BLjyjB5Pj9cLxCOBNFAA%2B4CxpLsHIpB57Q8L21K9g8tiuw%2BjpgzXT%2BIM3VWiqHN%2FCciZfryMX8%2B%2FOAbQN8vLUJfVkki14YfrCZEfnir3QTVZaT8hQLEbvmUwzPprlWD1z5LDIMs%2FPfCuY%2BaFXrlr2%2B7v1gHekSE91levPKtfGRV4NmLzjF5cCJLczUyTRNm3KPuG4smPC3Po4aSWFE88zKpB0SHEDkVlcjvvAWDmqCim3IUs6yvI52lClcNcf1YDHwdaGUbY%2BCNDnXbqVIDqe0NPZZPURwwkekvdP9Dw4L04tqdrhUqVWoZHeK8352%2BAT9fORs6RHwuncjR%2F1hes2TqnGTuV4vIkbPeqzxQm7uVP8knmxL4HU37QD8mxi5MMk%2BJVkYpddoTqQaIFMKjPsetn4y%2FWKZrdUBwtepIaxjwBdrPPQ8qSYDkCajKwoJsyiWDxKylpIgaXp8lMNWitiSb%2FuHe0DnUIUrLsMZwtSHUWbj5JyWaxbczjxRBqwXwEtdK%2BEEOJ1bI9RuvfwLKvuJtByoHeZCAtWkFWnVzOPuqIUG6SmHBPwNIZWOCSxvO06hCYGKAYu3SUlPVZF4AOZrriu2xADce7DC4kgaZReIxrhzwETEUdrtQkhVhSIGZiIVg7SR7InerjrPm44jvQ1jeI1xbyLT7gUs8wTTkOyxvQ4XAt4H81n7b%2FpQz6T1LKcbJFP1hur0HKXlxwfs4uBkAJRfcTMqhpVQayFRczFsEzXvKQuadWW4hi4dbUy07qSTrbLtXNTkx4IDw5uR28bQ3Yt0bhpgKqXYxEhpt6FbKtMsYGw36SmIBvVAa02b5KQ3PzSc85sNRkK1t9RcrMLtiIpYpBLgxs3%2F2fBY7iKnQP15MvcghT5nSw94vJQvOu6vws4%2FSuWfYBgrr3TKzTqmPcIMdvkQenxaWK7TniXOX8LmI9dPQo3fauFC3x%2F%2FXwKQIyCUYvM4LbBsZWkel%2B8qAQJPMU7258EqpK5UGI5x8%2BHjr%2FvHyJGebo7JnQ7EeFPbf7GilQw3WsjaKkV62OqF%2BgQ5FnGovUpIGqQi3pXRCoVf6S%2BoIxAayUXTQAE%2FFzd5f5Xh%2Fm5QEaVB0nYb%2FpP206%2BO8Lj%2BXDZYDpWrJxivdyppPnbVpCnm8g1fgkbrSpOTaqBV8VnlZ5nHWFi8KKDLnWRuq7shB7a2WSodyR2o88oTbh7U5VnwKCVOU%2FryxhZtq8SFCbtKsU0dl3ivmr5vVz9IV6pwai3fwXyyxxpclskrOV4egUAaSRvIe%2Fi%2BjXX%2BtjTBG9ZWlLoNsv2soAjrA5%2FzCZp9cBPRbq5Z%2FxULJ8X0rvf9z%2BMO6cgfgLqWd345qK54mCY6D9Qsy8VFvfvX8wcTsFruB8jt8VT%2FHjcTEi%2Bhvl3LaQmXiqB5n1GM2rXe0VE85lwegsObRVBkaxLAdTyyoO2rBN4EeU0eEoWeI35EE1hSCTp%2BbhnQcEGVRmeL1Pr7jweGFUrZy0oMxl8h%2FhzrECbMI2Mtab9wFpOhXWxaKTnbrSwFSrGVBA30iSlPnjZq%2FlcAaNn4KCSSuTJ6wz4dTGvct%2F4Vj4v1gAANIrDE5NsfNs6eL1qG&__VIEWSTATEGENERATOR=87BE3BDB&__VIEWSTATEENCRYPTED=&__EVENTVALIDATION=UPs8VIdhlea9dT%2FDpO3mTlwoIAcD63vAYZdzknfkltijyWVQPKltGNwyAiJjkshWc4OsyYtw8IsMcMhO%2BgCSuN2m70N%2FYULIPCSI6eMgw%2F2CTBgrX%2FC8ixAAK5CrzEVh&ctl00%24quotes_content_left%24submitString=1y%7Ctrue%7C{request.Ticker.ToUpper().Trim()}";

        }

        #endregion

    }
}
