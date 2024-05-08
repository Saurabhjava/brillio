package com.brillio.sevice;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.brillio.model.MyUser;
import com.brillio.repo.UserRepository;
@Service
public class UserServiceImpl implements UserService{
	
	private UserRepository repo;	

	public UserServiceImpl(UserRepository repo) {
		super();
		this.repo = repo;
	}

	@Override
	public String validate(MyUser user) {
		Optional<MyUser> op=repo.findById(user.getUserId());
		if(op.isPresent()) {
			MyUser u=op.get();
			if(u.getPassword().equals(user.getPassword()))
				return "Valid";
			else
				return "Invalid";
		}
		return "Invalid";
	}

	@Override
	public List<MyUser> allUser() {
		
		return repo.findAll();
	}

}
