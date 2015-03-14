({
    getListItem : function(component) {
        var action = component.get("c.getListItem");
        action.setCallback(this, function(data) {
            component.set("v.lists", data.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    createRecord : function(component) {
        var inputSecretField  = component.find("ui-inputSecret");
        var inputSecret = inputSecretField.get("v.value");

        if (!inputSecret) {
            alert("Your Select Object!");
            return false;
        }

        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": inputSecret
        });
        createRecordEvent.fire();
    }
})