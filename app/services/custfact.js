(function()
    {
        var custfact=function()
                    {
                        var items=[  
                            {id:1,name:'noodles',noofitems:20,amount:'20000',status1:'btn btn-primary display',status2:'ndisplay'},
                            {id:2,name:'lays',noofitems:30,amount:'26000',status1:'btn btn-primary display',status2:'ndisplay'},
                            {id:3,name:'fizz',noofitems:25,amount:'20600',status1:'btn btn-primary display',status2:'ndisplay'}
                            ];
                        var cart=[
                        ];
                        
                        var scope={};
                        scope.getcart=function()
                                    {
                                        return cart;
                                    }
                        scope.getitems=function()
                                        {
                                            return items
                                        }
                        scope.addtocart=function(id){
                            var id1=parseInt(id);
                            for(i=0,l=items.length;i<l;i++)
                            {
                                if(items[i].id==id1)
                                {
                                    items[i].noofitems=(items[i].noofitems)-1;

                                    if((items[i].noofitems)==0)
                                    {
                                        items[i].status1='ndisplay';    
                                        items[i].status2='btn btn-primary display';
                                        cart.forEach(function(ca){
                                            if(ca.id==items[i].id)
                                            {
                                                ca.status1='ndisplay';
                                                ca.status2='btn btn-primary display';
                                            }
                                        })

                                    }

                                    if(cart.length==0)
                                    {
                                        ao=items[i];
                                        cart[0]={...ao}
                                        cart[0].noofitems=1;
                                    }
                                    else
                                    {
                                        for(j=0,k=cart.length;j<k;j++)
                                        {
                                            if(cart[j].id==items[i].id)
                                            {
                                                cart[j].noofitems=(cart[j].noofitems)+1;
                                            }
                                            else
                                            {
                                                if(j==(k-1))
                                                {
                                                    ai=items[i]
                                                    cart[k]={...ai};
                                                    cart[k].noofitems=1;
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }




                        scope.add=function(i,j,k,l){
                            var las=items.length;
                            var count=0;
                            items.forEach(function(itm){
                                
                                if(parseInt(itm.id)==parseInt(i) )
                                {
                                    
                                    itm.noofitems=parseInt(itm.noofitems) +parseInt(k)
                                    count+=1
                                }
                                
                            })
                            if(count==0)
                                {
                                    var new1={id:parseInt(i),name:j,noofitems:parseInt(k),amount:parseInt(l),status1:'btn btn-primary display',status2:'ndisplay' }
                                    items[las]=new1;
                                }
                        }
                        return scope;
                    }


        angular.module('CustModule').factory('custfact',custfact);            

    })();