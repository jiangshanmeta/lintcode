"""
# Employee info
class Employee:
    def __init__(self, id, importance, subordinates):
        # It's the unique id of each node.
        # unique id of this employee
        self.id = id
        # the importance value of this employee
        self.importance = importance
        # the id of direct subordinates
        self.subordinates = subordinates
"""
class Solution:
    """
    @param imput: 
    @param id: 
    @return: the total importance value 
    """
    def getImportance(self, employees, id):
        self.result = 0
        d = {}
        for employee in employees:
            d[employee.id] = employee
        
        self.dfs(id,d)
        return self.result
        
    def dfs(self,id,d):
        employee = d[id]
        self.result += employee.importance

        for subId in employee.subordinates:
            self.dfs(subId,d)