package com.argusoft.canteen.server.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class user {
    @Id
    @Column(name = "user_uuid", updatable = false, nullable = false)
    private int user_uuid;
    private String employeeId;
    private String uname;
    private long uphone;
    private String utype;
    private String email;
    private int wallet_amount;
    private Date created_at;
    private Date updated_at;


}
