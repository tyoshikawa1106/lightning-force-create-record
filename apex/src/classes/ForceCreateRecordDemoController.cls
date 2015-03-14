public with sharing class ForceCreateRecordDemoController {
    
    @AuraEnabled
    public static List<String> getListItem() {
        List<String> lists = new List<String>();
        lists.add('Account');
        lists.add('Contact');
        lists.add('Opportunity');
        lists.add('Contract');
        lists.add('Event');
        lists.add('Task');
        
        return lists;
    }
}