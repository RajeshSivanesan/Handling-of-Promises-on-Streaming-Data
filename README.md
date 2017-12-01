This sample will help in handling promises on a streaming data. Post all data is streamed final callback will be called.

There are two ways we can solve this problem

1) One by Using Promise.All([array of promises]), on streamed data create a promise and push to an array
   Finally after everything is read, onEnd use promise.all on all promises at one shot
   
2) This approach is like, we will have access to the length of the data going to be streamed, use a simple counter and compare
   at each moment and when its the last invoke the final callback
   
This can be extended for Async await too.
