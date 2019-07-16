package Demo6;
/*
 * 1.理解面向过程和面向对象的概念及区别
 * 2.掌握如何在需求中提取对象，会使用java代码描述提取的对象
 * 3.了解对象在内存中的存在状态
 * 4.理解类和对象的区别
 * 5.掌握局部变量和成员变量的概念，使用局限和应用
 * 7.掌握引用传递和值传递
 * */
public class demo6_1 {
//	1.面向对象的引用
//	需求：计算一个班级的总分
	public static void main(String[] args) {
//		计算一个班级的总分
//		求多个double型数字的和的问题
//		不知道总分多少，所有需要定义一个变量表示
		double sum = 0;
//		因为数字比较多，一个一个计算比较麻烦，所以需要用一个容器包装起来
//		应为要计算的数字都是double型的，所以可以使用数组保存
		double[] array = new double[]{1.0,2.5,3.,4.5,0,5.0};
//		要求和，所以应该将数组中的每个元素都加起来
		for(int i = 0; i < array.length; i++) {
			sum += array[i];
		}
		System.out.println("总分是：" + sum);
	}

}
