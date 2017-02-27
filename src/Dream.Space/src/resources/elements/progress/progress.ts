import { bindable } from "aurelia-framework";
import {PlaygroundRuleSetInfo} from "../../../common/types/playground-models";

export class Progress {
    @bindable ruleset: PlaygroundRuleSetInfo;

}