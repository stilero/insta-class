<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of follows
 *
 * @author Daniel Eliasson <daniel at stilero.com>
 */
class Follows extends InstaRelationships{
    
    protected $_followids = array();

    public function __construct($accessToken) {
        parent::__construct($accessToken);
    }
    
    public function listFollowsIds($user_id){
        $follows = json_decode($this->getUserIdFollows($user_id));
        foreach ($follows->data as $user) {
            $this->_followids[] = $user->id;
        }
        return $this->_followids;
    }
}

?>
