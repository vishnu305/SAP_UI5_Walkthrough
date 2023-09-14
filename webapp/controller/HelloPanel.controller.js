sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast","sap/m/MessageBox", "sap/ui/core/Fragment"
], function (Controller,MessageToast,MessageBox,Fragment) {
    //controller to write the onshowhello event
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel",{
        onShowHello : function () {
            "use strict";
            // alert('Hello there!');
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg",[sRecipient]);
            //show MessageToast
            MessageToast.show(sMsg);
            // MessageBox.information(sMsg,"Information");
            // MessageBox.alert(oBundle.getText("helloMsg"));
        },
        onOpenDialog : function () {
            this.getOwnerComponent().openHelloDialog();
        },
        // onCloseDialog: function () {
        //     this.byId("helloDialog").close(); 
        // }
    })
   
});