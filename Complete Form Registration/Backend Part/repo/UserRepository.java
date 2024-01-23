package com.manikanta.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manikanta.www.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    // Add custom queries if needed
}

