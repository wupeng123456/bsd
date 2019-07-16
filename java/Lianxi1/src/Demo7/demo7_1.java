package Demo7;

public class demo7_1 {
	public static void main(String[] args) {
		// 创建一个人
		Person p1 = new Person();
		Person p2 = new Person();
		boolean b = p1.compareByAge(p2);
		System.out.println(b ? "是" : "不是");
	}
}

