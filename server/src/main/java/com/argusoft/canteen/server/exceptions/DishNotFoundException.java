package com.argusoft.canteen.server.exceptions;

public class DishNotFoundException extends RuntimeException {
    public DishNotFoundException(String s) {
        super(s);
    }
}
