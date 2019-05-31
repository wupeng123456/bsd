package Demo1;

public class demo1_8 {
/*
	需求：分别输出5行5列的矩形和9行9列的矩形
*/
	public static void main(String[] args) {
		deaw(5, 5);
		deaw(9, 9);
	}
	public static void deaw(int row, int col) {
		for( int i = 1; i <= row; i++) {
			for (int j = 1; j <= col; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
	}
}
