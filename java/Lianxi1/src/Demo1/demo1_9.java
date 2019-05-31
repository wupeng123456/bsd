package Demo1;

public class demo1_9 {
	// 方法的重载
	/*
	 * 需求1：计算2个int数据的和值。
	 * 需求2：计算3个int数据的和值。
	 * 需求2：计算4个int数据的和值。
	 */
	public static void main(String[] args) {
		int x = add(1,2);
		System.out.println(x);
		int y = add(1,2,3);
		System.out.println(y);
		int z = add(1,2,3,4);
		System.out.println(z);
	}
	public static int add(int a, int b) {
		return a + b;
	}
	public static int add(int a, int b, int c) {
		return a + b + c;
	}
	public static int add(int a, int b, int c, int d) {
		return a + b + c + d;
	}
}
