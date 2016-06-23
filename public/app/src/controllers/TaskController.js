/**
 * Created by yanndeungoue on 31/03/2016.
 */

import Marionette from "backbone.marionette";
import TaskView from "../views/TaskView";
import UserModel from "../models/UserModel";

export default class TaskController extends Marionette.Controller{
    /**
     * Méthode qu'expose mon controlleur pour répondre à un path.
     */
    tasks(){
        console.log("I'm TaskController");
        let view = new TaskView();
        let regionManger = window.app.getRegionManager();
        let region = regionManger.get("container");
        region.show(view);
    }
}
