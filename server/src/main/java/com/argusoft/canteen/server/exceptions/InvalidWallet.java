package com.argusoft.canteen.server.exceptions;

public class InvalidWallet extends RuntimeException{
    public InvalidWallet(String s){
        super(s);
    }
}
