package com.brillio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Answer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int aid;
	private String ans;
	private String givenBy;
	@ManyToOne
	@JoinColumn(name="qid")
	private Question question;
	public Answer() {
		// TODO Auto-generated constructor stub
	}
	
	public Answer(String ans, String givenBy, Question question) {
		super();
		this.ans = ans;
		this.givenBy = givenBy;
		this.question=question;
	}

	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getAns() {
		return ans;
	}
	public void setAns(String ans) {
		this.ans = ans;
	}
	public String getGivenBy() {
		return givenBy;
	}
	public void setGivenBy(String givenBy) {
		this.givenBy = givenBy;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}
	
	
	

}
