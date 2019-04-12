package cn.demo;

import org.junit.Test;

public class Demo9 {
	@Test
	public void login() {
		// 假设从页面获取到的数据为以下
				User user = new User();
				user.setUsername("admin'-- ");
				user.setPassword("admin");
				UserDao userDao = new UserDao();
				// 调用UserDao中的login方法查询数据库
				User queryUser = userDao.login1(user);
				// 如果能查询到数据，证明用户登录的账户和密码正确,如果返回的用户为null,证明用户登录的账户或者密码不正确
				if (queryUser == null) {
					// 用户登录失败
					System.out.println("用户名和密码不正确，请重新输入！");
				} else {
					System.out.println("登录成功！");
				}

	}

}
