package com.horror_scope.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Exceptions extends RuntimeException {
    public Exceptions(String message) {
        super(message);
    }
}

