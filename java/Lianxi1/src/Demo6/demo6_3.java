package Demo6;

public class demo6_3 {
	public static void main(String[] args) {
		double[] array = new double[]{1.0,2.5,3.,4.5,0,5.0};
		FunctionTool fool = new FunctionTool();
		double sum = fool.getSum(array);
		System.out.println("×Ü·ÖÊÇ£º" + sum);
	}
}
class FunctionTool {
	public static double getSum(double[] array) {
		double sum = 0.0;
		for (int i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	}
}
