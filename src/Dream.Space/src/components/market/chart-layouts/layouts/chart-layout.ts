import { autoinject, bindable } from "aurelia-framework";
import {LayoutInfo} from "../../../../common/types/layout-models";

@autoinject()
export class ChartLayout {

    @bindable layout: LayoutInfo;


}