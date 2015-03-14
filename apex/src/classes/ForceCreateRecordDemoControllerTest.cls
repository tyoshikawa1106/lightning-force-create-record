@isTest
private class ForceCreateRecordDemoControllerTest {
    
    private static User testAdminUser  = new User(Id = UserInfo.getUserId());
    
    static testMethod void getListItemTest() {
        System.runAs(testAdminUser)  {
            Test.startTest();
            
            List<String> results = ForceCreateRecordDemoController.getListItem();
            
            Test.stopTest();
            
            System.assertEquals(results.size(), 6);
        }
    }
}