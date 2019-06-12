package Demo1;

public class demo1_15 {
	public static void main(String[] args){
		int[] arr = {3,6};
		demo( arr );
		System.out.println("arr[0]="+arr[0]);
		System.out.println("arr[1]="+arr[1]);
	}

	public static void demo( int[] arr ){
		arr[0] = arr[0] + arr[0];
		arr[1] = arr[1] + arr[1];
	}

}
