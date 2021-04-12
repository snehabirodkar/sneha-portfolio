import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
class RevealOnScroll{
    
    constructor(els,offsetPercentage="60%"){
        
        this.itemsToReveal = els;
        this.offsetPercentage = offsetPercentage;
        this.hideInitially();
        this.createWaypoints();
    }
    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }   
    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function(){
            var currentElement = this;
            new Waypoint({
                element: currentElement,
                handler: function(){
                    $(currentElement).addClass("reveal-item-is-visible");
                },
                offset: that.offsetPercentage
            });
        })
    }
}

export default RevealOnScroll;