package com.brillio.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brillio.model.MyUser;

public interface UserRepository extends JpaRepository<MyUser, String> {

}
