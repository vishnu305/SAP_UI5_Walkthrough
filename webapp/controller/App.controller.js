sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel" //pulling our controller assets
],function (Controller) { //pulling our controller function
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.View.App",{ 
        onInit: function () {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        } 
    });
});