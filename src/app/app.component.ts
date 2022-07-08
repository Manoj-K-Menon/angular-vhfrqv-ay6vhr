import { Component } from '@angular/core';
import {
  AxisLabelClickEvent,
  LegendItemClickEvent,
  LegendItemHoverEvent,
  PlotAreaClickEvent,
  PlotAreaHoverEvent,
  SeriesClickEvent,
  SeriesHoverEvent,
} from '@progress/kendo-angular-charts';

@Component({
  selector: 'my-app',
  template: `
        <kendo-chart
            [categoryAxis]="{ categories: categories }"
            (render)="onRender()"
            (axisLabelClick)="onAxisLabelClick($event)"
            (legendItemClick)="onLegendItemClick($event)"
            (legendItemHover)="onLegendItemHover($event)"
            (plotAreaClick)="onPlotAreaClick($event)"
            (plotAreaHover)="onPlotAreaHover($event)"
            (seriesClick)="onSeriesClick($event)"
            (seriesHover)="onSeriesHover($event)">
            <kendo-chart-title text="Gross domestic product growth /GDP annual %/"></kendo-chart-title>
            <kendo-chart-legend position="bottom" orientation="horizontal"></kendo-chart-legend>
            <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
            <kendo-chart-series>
                <kendo-chart-series-item *ngFor="let item of series"
                    type="line" style="smooth" [data]="item.data" [name]="item.name">
                </kendo-chart-series-item>
            </kendo-chart-series>
        </kendo-chart>
        <event-log title="Event log" [events]="events"></event-log>
    `,
})
export class AppComponent {
  public events: string[] = [];
  public series = [
    {
      name: 'India',
      data: [
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
      ],
    },
    {
      name: 'Russian Federation',
      data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3],
    },
    {
      name: 'Germany',
      data: [
        0.01, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.69, 2.995,
      ],
    },
    {
      name: 'World',
      data: [
        1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727,
      ],
    },
  ];

  public categories: number[] = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
  ];

  public onRender(): void {
    this.log('render', {});
  }

  public onAxisLabelClick(e: AxisLabelClickEvent): void {
    this.log('axisLabelClick', e);
  }

  public onLegendItemClick(e: LegendItemClickEvent): void {
    this.log('legendItemClick', e);
  }

  public onLegendItemHover(e: LegendItemHoverEvent): void {
    this.log('legendItemHover', e);
  }

  public onPlotAreaClick(e: PlotAreaClickEvent): void {
    this.log('plotAreaClick', e);
  }

  public onPlotAreaHover(e: PlotAreaHoverEvent): void {
    this.log('plotAreaHover', e);
  }

  public onSeriesClick(e: SeriesClickEvent): void {
    this.log('seriesClick', e);
  }

  public onSeriesHover(e: SeriesHoverEvent): void {
    this.log('seriesHover', e);
  }

  private log(event: string, args: unknown): void {
    this.events.push(`${event}`);
    console.log(args);
  }
  public onSeriesItemClick(dataItem) {
    console.log(dataItem);
  }
}
