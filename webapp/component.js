sap.ui.define([
    "sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel","./controller/HelloDialog","sap/ui/Device"
],function (UIComponent, JSONModel, ResourceModel,HelloDialog,Device) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            // set the data model on the view
            // odata json object
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            var oData = {
                recipient : {
                    name : "UI5"
                }
            };
            var oModel = new JSONModel(oData); // create and assign json model to xml view
            this.setModel(oModel);

            //set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel,"device");
            //set dialog
            // _ is a private method
            this._helloDialog = new HelloDialog(this.getRootControl());
            //create the views based on the uil/hash
            this.getRouter().initialize();
        },
        getContentDensityClass : function () {
            if (!this._sContentDensityClass) {
                if (!Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        },
        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },
        openHelloDialog: function () {
            this._helloDialog.open();
        }
    })
})