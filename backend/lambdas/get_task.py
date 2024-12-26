import json
import boto3

# Initialize DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table_name = 'TasksTable'  # Replace with your DynamoDB table name
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    try:
        response = table.scan()
        tasks = response.get('Items', [])
        
        return {
            'statusCode': 200,
            'body': json.dumps({'tasks': tasks})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }