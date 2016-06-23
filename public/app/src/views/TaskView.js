/**
 * Created by yanndeungoue on 31/03/2016.
 */

import Marionette from "backbone.marionette";
import templateView from "../templates/task-template.hbs";

import "moment";
import "moment/locale/fr"
import datetime from "../bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker";

export default class TaskView extends Marionette.ItemView{

    /**
     * si méthode initialize pas besoin de redefinir le constructeur
     * @param options
     */

    constructor(options) {
        super(options);
        this.template = templateView;
        console.log(datetime);
    }
    onRender(){ 
        this.ui.dateInput.data('DateTimePicker');
        this.ui.dateInput.datetimepicker({
            locale:"fr",
            format: "DD/MM/YYYY",
            defaultDate: new Date()
        });
    }

    events(){
        return {
            "click @ui.dateInput":"createDatePicker"
        };
    }

    ui(){
        return {
            dateInput    :   "#datetimepicker1"
        };
    }
}