using Dream.Space.Models.Indicators;
using System.ComponentModel.DataAnnotations.Schema;
using Dream.Space.Models.Layouts;

namespace Dream.Space.Data.Entities.Layouts
{
    public class ChartIndicator: IChartIndicatorEntity
    {
        public int Id { get; set; }
        public int PlotId { get; set; }
        public int IndicatorId { get; set; }
        public int OrderId { get; set; }

        //[NotMapped]
        //public IIndicatorEntity Indicator { get; set; }

        [NotMapped]
        public string Name { get; set; }
        public string LineColor { get; set; }

    }

}

/*
    id: number;
    title: string;
    layoutId: number;
    plotId: number;
    orderId: number;
    indicators: LayoutIndicatorInfo[];
*/
