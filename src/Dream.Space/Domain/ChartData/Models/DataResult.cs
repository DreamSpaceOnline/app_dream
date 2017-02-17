﻿namespace Dream.Space.Domain.ChartData.Models
{
    public class DataResult<T>
    {
        public DataResult()
        {
            Status = new ResultStatus() {StatusCode = StatusCode.Ok};    
        }

        public T Result { get; set; }
        public ResultStatus Status { get; set; }
    }
}