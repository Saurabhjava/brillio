package com.brillio.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brillio.model.Question;

@Repository
public interface IQuestionDao extends JpaRepository<Question,Integer>{

}
