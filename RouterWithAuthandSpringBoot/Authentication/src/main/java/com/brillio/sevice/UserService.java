package com.brillio.sevice;

import java.util.List;

import com.brillio.model.MyUser;

public interface UserService {
	public String validate(MyUser user);
	public List<MyUser> allUser();
}
