/**
 * Instagram connection behavior for InstaImages component
 *
 * @version  1.0
 * @version $Id$
 * @author Daniel Eliasson (joomla at stilero.com)
 * @copyright  (C) 2012-jul-15 Stilero Webdesign http://www.stilero.com
 * @license	GPLv3
 * 
 * Joomla! is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * 
 * This file is part of instaimages.

 */
jQuery(function($){
    
    
    
    var valnow;
    var counter = 0;
    
    var maxvar = $('#counter').text();
    var percent = 0;
    $('.progress-bar').attr({'style' : 'width='+percent+'%'});
    $('.progress-bar').attr({'aria-valuemax' : maxvar});
    
    var updateBar = function(count){
        $('.progress-bar').attr({'aria-valuenow' : count});
        percent = (count / maxvar) * 100;
        //$('.progress-bar').attr({'style' : 'width='+percent+'%'});
        $('.progress-bar').css('width', percent+'%');
    }
    
    var handleResponse = function(data){
        if(data === undefined){
            return false;
        }
        if(data.code !== '200'){
            throw new Error(data.error_message);
            return false;
        }else{
            return true;
        }
    };
    
    var follow = function(user_id, button){
        var result;
        var requestData = {
            user_id: user_id
        };
        
        $.getJSON('follow.php', requestData, function(data){
                return handleResponse(data.meta);
            }).success(function(data){
                button.append('<span class="badge glyphicon glyphicon-ok"> </span>').fadeIn('slow');
                button.attr({class: 'btn btn-default'}).fadeIn('slow');
                result = handleResponse(data.meta);
                return result;
            }).error(function(data){
                return false;
            }).complete(function(data){
                return result = handleResponse(data.meta);
            });
          return false;  
        };
        
    $('a').click(function(e) {
        e.preventDefault();
        follow($(this).text(), $(this));
      });    
        
    $('#myButton').click(function(e){
        var result = true;
        $(this).attr({'disabled' : "disabled"});
        $('li').each($).wait(2000, function( index ){
            if(result === true){
                var user_id = $(this).attr('id');
                result = follow(user_id, $('#button-' + user_id));
                counter++;
                updateBar(counter);
            }
        });
        $(this).attr({'disabled' : "enabled"});
    });
    
    
});