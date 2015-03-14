({
    doInit : function(component, event, helper) {
        helper.getListItem(component);
    },
    doClickCreateRecordBtn : function(component, event, helper) {
        helper.createRecord(component);
    }
})