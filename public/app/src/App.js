/**
 * Created by yanndeungoue on 30/03/2016.
 */
import Marionette from "backbone.marionette";
import Backbone from "backbone";
import Routes from "./Routes";
import Polyglot from "node-polyglot";
import * as Util from "./config/SharedUtils"
import TaskController from "./controllers/TaskController";
import HomeController from "./controllers/HomeController";
import ApplicationRegionManager from "./regions/manager/ApplicationRegionManager";




let _regionManager = null;

export default class MyApp extends Marionette.Application{




    initialize( options ){

        let router =  new Routes();
        router.processAppRoutes(new HomeController(), {
            "":"home"
        });
        router.processAppRoutes(new TaskController(), {
            "task":"tasks"
        });
        console.log("hello from the addInitializer.");
        
        window.router = router;

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

window.app.on("before:start", function(options){
    let locale = localStorage.getItem("locale") || "fr";
    let phrases = null;
    if( locale === "fr"){
        phrases = Util.LABEL_fr;
    }else{
        phrases = Util.LABEL_en;
    }

    window.polyglot = new Polyglot({ phrases: phrases });
    console.log("before:start");
});

window.app.on("start", function(){
    if (Backbone.history) {
        Backbone.history.start();
    }
});

window.app.start();