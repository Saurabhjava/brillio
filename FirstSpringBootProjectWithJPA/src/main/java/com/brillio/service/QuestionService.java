package com.brillio.service;

import org.springframework.stereotype.Service;

import com.brillio.dao.IQuestionDao;
import com.brillio.model.Question;

@Service
public class QuestionService {
	private IQuestionDao qDao;

	public QuestionService(IQuestionDao qDao) {
		super();
		this.qDao = qDao;
	}
	
	public String createQuestion(Question q) {
		qDao.saveAndFlush(q);
		return "Question Created";
	}
	public String removeQuestion(int qid) {
		qDao.deleteById(qid);
		return "Question Deleted";
	}
}
