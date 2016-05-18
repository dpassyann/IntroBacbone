/**
 * Created by yanndeungoue on 06/04/2016.
 */

import Marionette from "backbone.marionette";

import * as sharedConstants from "../../config/SharedUtils"

export default class ApplicationRegionManager extends Marionette.RegionManager{


    regions(){
        return {
            container : sharedConstants.CONTAINER
        }
    }
}