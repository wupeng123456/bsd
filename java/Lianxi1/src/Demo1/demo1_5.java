package Demo1;

public class demo1_5 {
// 打印1~100之间的能够被3整除的所有数字。
	public static void main(String[] args) {
		//1, 循环1-100的数字
		//2，向三取余
		for(int i = 1; i <= 100; i++) {
			if (i % 3 == 0) {
				System.out.println("i=" + i);
			}
		}
		System.out.println("Hello Word");
	}
}
