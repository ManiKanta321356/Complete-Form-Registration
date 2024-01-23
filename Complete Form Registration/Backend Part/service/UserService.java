package com.manikanta.www.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manikanta.www.entity.User;
import com.manikanta.www.repo.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository ur;

    public User saveUser(User user) {
        return ur.save(user);
    }

    // Add more service methods as needed
}
