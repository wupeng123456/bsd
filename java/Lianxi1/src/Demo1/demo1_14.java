package Demo1;

public class demo1_14 {
	public static void main(String[] args){
		int a = 3, b = 5;
		demo(a, b);
		System.out.println("a=" + a);
		System.out.println("b=" + b);
	}
	public static void demo(int a, int b) {
		a = a + a;
		b = b + b;
	}
}
