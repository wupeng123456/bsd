package Demo1;

public class demo1_7 {
	/*
	需求：在屏幕上打印5行5列的星号。要求每个输出语句只能打印一个星号。
打印如下图形：
		*****
		*****
		*****
		*****
		*****
*/
	public static void main(String[] args) {
		for (int i = 1; i <= 5; i++) {
			for (int j = 1; j <= 5;j++) {
				System.out.print("*");
//				 break;
			}
			System.out.println();//打印空行，起到换行的作用
		}
	}
}
