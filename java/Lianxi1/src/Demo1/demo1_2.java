package Demo1;

public class demo1_2 {
	// 输出1~50之间所有的偶数
	// 首先提供1~50之间的数子
	public static void main(String[] args) {
		int a = 1;
		while(a <= 50) {
			if (a % 2 == 0) {
				System.out.println("a=" + a);
			}
			a++;
		}
		System.out.println("循环结束");
	}
}
