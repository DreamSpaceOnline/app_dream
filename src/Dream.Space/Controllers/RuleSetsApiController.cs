using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Dream.Space.Data.Entities.Strategies;
using Dream.Space.Data.Models;
using Dream.Space.Data.Services;
using Dream.Space.Models.Enums;
using Dream.Space.Models.Strategies.Rules;

namespace Dream.Space.Controllers
{
    [RoutePrefix("api/ruleset")]
    public class RuleSetsApiController : ApiController
    {
        private readonly IRuleSetService _service;

        public RuleSetsApiController(IRuleSetService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("{id:int:min(1)}")]
        [ResponseType(typeof(RuleSetModel))]
        public async Task<IHttpActionResult> GetRuleSet(int id)
        {
            var rule = await _service.GetRuleSetAsync(id);

            return Ok(rule);
        }

        [HttpGet]
        [Route("{period:int}/all")]
        [ResponseType(typeof(List<RuleSetModel>))]
        public async Task<IHttpActionResult> GetRuleSets(int period)
        {
            var rules = await _service.GetRuleSetsAsync((QuotePeriod)period);

            return Ok(rules);
        }

        [HttpPost]
        [Route("")]
        [ResponseType(typeof(RuleSetModel))]
        public async Task<IHttpActionResult> SaveRuleSet([FromBody] RuleSetModel model)
        {

            var rule = await _service.SaveRuleSetAsync(model);

            return Ok(rule);
        }

        [HttpDelete]
        [Route("{id:int:min(1)}")]
        public async Task<IHttpActionResult> DeleteRuleSet(int id)
        {
            await _service.DeleteRuleSetAsync(id);
            return Ok();
        }

        [HttpGet]
        [Route("strategy/{id:int:min(1)}")]
        [ResponseType(typeof(List<vStrategyRuleSet>))]
        public async Task<IHttpActionResult> GetStrategyRuleSets(int id)
        {
            var records = await _service.GetStrategyRuleSetsAsync(id);
            return Ok(records);
        }

        [HttpPost]
        [Route("strategy/{id:int:min(1)}")]
        public async Task<IHttpActionResult> SaveStrategyRuleSets(int id, [FromBody] List<vStrategyRuleSet> ruleSets)
        {

            await _service.SaveStrategyRuleSets(id, ruleSets);

            return Ok();
        }
    }
}
