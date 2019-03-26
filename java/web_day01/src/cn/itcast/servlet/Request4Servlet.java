package cn.itcast.servlet;

import java.io.IOException;
import java.util.Map.Entry;
import java.util.Arrays;
import java.util.Map;
import java.util.Set;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Request4Servlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
/*
 *
		//一次性获取所有表单提交的参数
		Map<String, String[]> map = request.getParameterMap();
		Set<Entry<String, String[]>> entrySet = map.entrySet();
		for (Entry<String, String[]> entry : entrySet) {
			String key = entry.getKey();
			String[] value = entry.getValue();
			System.out.println(key+"..."+Arrays.toString(value));
		}
*/
		// 通过key获取参数
		String username = request.getParameter("username");
		System.out.println(username);
		String sex = request.getParameter("sex");
		System.out.println(sex);
		// 由于提交的兴趣爱好是一个数组，影子要是用getParameterValues来接受
		String[] hobbys = request.getParameterValues("hobby");
		for (int i = 0; i < hobbys.length; i++) {
			System.out.println(hobbys[i]);
		}
		// 一次性获取所有表单参数
		Map<String, String[]> map = request.getParameterMap();
		Set<Entry<String, String[]>> entrySet = map.entrySet();
		for (Entry<String, String[]> entry : entrySet) {
			String key = entry.getKey();
			String[] value = entry.getValue();
			System.out.println(key+"..."+Arrays.toString(value));
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
