<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
require_once '../../requester/requester.php';

/**
 * Description of InstaEndpoint
 *
 * @author Daniel Eliasson <daniel at stilero.com>
 */
class InstaEndpoint extends Requester {
    
    protected $requestUrl = 'https://api.instagram.com/v1/';
    protected $accessToken;
    
    public function __construct($accessToken) {
        parent::__construct();
        $this->accessToken = $accessToken;
    }
}

?>
