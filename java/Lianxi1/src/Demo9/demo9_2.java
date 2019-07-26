package Demo9;

abstract class demo9_2 {
	int a = 10; // 非静态成员变量
	static int b = 100;// 静态成员变量
//	非静态函数
	public void show() {
		System.out.println("非静态函数");
	}
//	静态函数
	public static void fun(){
		System.out.println("静态函数");
	}
//	构造函数 作用是在子类继承时供子类构造函数调用的
//	目的是给类中的非静态成员变量显示赋值
	demo9_2(){
		System.out.println("构造函数Demo");
	}
	static {
		System.out.println("静态代码块");
	}
	{
		System.out.println("构造代码块");
	}
//	c抽象函数
	abstract void method();
}
