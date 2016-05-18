/**
 * Created by yanndeungoue on 30/03/2016.
 */
import Marionette from "backbone.marionette";
import Backbone from "backbone";
import Routes from "./Routes";

import TaskController from "./controllers/TaskController";
import HomeController from "./controllers/HomeController";

import ApplicationRegionManager from "./regions/manager/ApplicationRegionManager";

let _regionManager = null;

export default class MyApp extends Marionette.Application{

    start(){
        if (Backbone.history) {
            Backbone.history.start();
        }
    }

    initialize( options ){

        let router =  new Routes();
        router.processAppRoutes(new HomeController(), {
            "":"home"
        });
        router.processAppRoutes(new TaskController(), {
            "task":"tasks"
        });
        console.log("hello from the addInitializer.");

    }

    getRegionManager(){
        if( !_regionManager ){
            _regionManager =  new ApplicationRegionManager();
        }
        return _regionManager;
    }

    regions(){

    }
}

window.app = new MyApp();

window.app.start();