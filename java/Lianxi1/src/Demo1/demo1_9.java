package Demo1;

public class demo1_9 {
	// ����������
	/*
	 * ����1������2��int���ݵĺ�ֵ��
	 * ����2������3��int���ݵĺ�ֵ��
	 * ����2������4��int���ݵĺ�ֵ��
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
