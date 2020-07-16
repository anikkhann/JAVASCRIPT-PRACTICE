var nums=[10, 20, 5, 25, 40, 30, 60, 70];
var max=nums[0];
for(var i=0; i<=nums.length; i++)
{
    if(max<nums[i])
    {
        max=nums[i];
        
    }
}
console.log(max);


//function diye max
function maxNum(num)
{
        var max=nums[0];
        for(var i=0; i<=nums.length; i++)
        {
             if(max<nums[i])
             {
                max=nums[i];
            
             }
        }
        return max;
}
var num=[10, 20, 5, 25, 40, 30, 60, 70];
var result=maxNum(num);
console.log(result);